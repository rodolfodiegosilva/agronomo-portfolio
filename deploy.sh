#!/bin/bash

# ==========================================================================
# Script de Implantação Automática na AWS Amplify & Route 53
# Projeto: Portfólio de Agronomia Premium
# Subdomínio: exemplo-portfolio.rodolfo-silva.com
# Profile AWS: conta-aws
# ==========================================================================

# Cores para logs elegantes
GREEN='\033[0;32m'
RED='\033[0;31m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # Sem cor

echo -e "${BLUE}====================================================================${NC}"
echo -e "${GREEN}      🌱 AWS Amplify & Route 53 Auto-Deploy Script - AgroScience 🌱${NC}"
echo -e "${BLUE}====================================================================${NC}"
echo ""

# 1. Verificar pré-requisitos locais
echo -e "${BLUE}[1/5] Verificando pré-requisitos locais...${NC}"

if ! command -v aws &> /dev/null; then
    echo -e "${RED}Erro: AWS CLI não está instalado. Por favor, instale o AWS CLI antes de prosseguir.${NC}"
    exit 1
fi

# Verificar se o perfil conta-aws está configurado
if ! aws configure list-profiles | grep -q "conta-aws"; then
    echo -e "${RED}Erro: O perfil AWS '--profile conta-aws' não foi encontrado.${NC}"
    echo -e "${YELLOW}Por favor, configure o perfil executando: aws configure --profile conta-aws${NC}"
    exit 1
fi
echo -e "${GREEN}✔ AWS CLI e perfil 'conta-aws' detectados!${NC}"
echo ""

# 2. Solicitar Token do GitHub
echo -e "${BLUE}[2/5] Autenticação segura com o GitHub...${NC}"
echo -e "${YELLOW}Para conectar o Amplify ao seu repositório, insira o seu GitHub Personal Access Token (PAT):${NC}"
echo -e "${YELLOW}(Dica: O token clássico precisa ter os escopos 'repo' e 'admin:repo_hook')${NC}"
read -sp "Token do GitHub: " GITHUB_TOKEN
echo ""

if [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}Erro: O Token do GitHub não pode estar em branco.${NC}"
    exit 1
fi
echo -e "${GREEN}✔ Token recebido com sucesso.${NC}"
echo ""

# 3. Criar Aplicativo no AWS Amplify
echo -e "${BLUE}[3/5] Criando o aplicativo no AWS Amplify...${NC}"
echo -e "${YELLOW}Executando aws amplify create-app...${NC}"

CREATE_APP_JSON=$(aws amplify create-app \
  --name "agronomo-portfolio" \
  --repository "https://github.com/rodolfodiegosilva/agronomo-portfolio" \
  --platform WEB \
  --access-token "$GITHUB_TOKEN" \
  --profile conta-aws 2>&1)

if [ $? -ne 0 ]; then
    echo -e "${RED}Falha ao criar o aplicativo no AWS Amplify. Detalhes do erro:${NC}"
    echo "$CREATE_APP_JSON"
    exit 1
fi

# Extrair appId do JSON de retorno (usando grep/sed para independência de dependências externas como jq)
APP_ID=$(echo "$CREATE_APP_JSON" | grep -o '"appId": "[^"]*' | grep -o '[^"]*$')

if [ -z "$APP_ID" ]; then
    echo -e "${RED}Erro: Não foi possível obter o ID do aplicativo gerado pela AWS.${NC}"
    exit 1
fi

echo -e "${GREEN}✔ Aplicativo criado com sucesso! App ID: ${YELLOW}$APP_ID${NC}"
echo ""

# 4. Criar branch master e acionar o build inicial
echo -e "${BLUE}[4/5] Registrando a branch principal 'master' e iniciando a esteira...${NC}"

# Criar a branch master no Amplify
CREATE_BRANCH_OUT=$(aws amplify create-branch \
  --app-id "$APP_ID" \
  --branch-name "master" \
  --profile conta-aws 2>&1)

if [ $? -ne 0 ]; then
    echo -e "${RED}Falha ao registrar a branch 'master'. Detalhes:${NC}"
    echo "$CREATE_BRANCH_OUT"
    exit 1
fi
echo -e "${GREEN}✔ Branch 'master' vinculada ao CI/CD com sucesso!${NC}"

# Iniciar o deploy inicial (Job de release)
START_JOB_OUT=$(aws amplify start-job \
  --app-id "$APP_ID" \
  --branch-name "master" \
  --job-type RELEASE \
  --profile conta-aws 2>&1)

if [ $? -ne 0 ]; then
    echo -e "${RED}Falha ao iniciar o build inicial. Detalhes:${NC}"
    echo "$START_JOB_OUT"
    exit 1
fi
echo -e "${GREEN}✔ Esteira de compilação inicial iniciada com sucesso!${NC}"
echo ""

# 5. Associar Subdomínio exemplo-portfolio.rodolfo-silva.com no Route 53
echo -e "${BLUE}[5/5] Associando o subdomínio no seu Route 53 (rodolfo-silva.com)...${NC}"
echo -e "${YELLOW}Configurando: exemplo-portfolio.rodolfo-silva.com -> master branch${NC}"

DOMAIN_OUT=$(aws amplify create-domain-association \
  --app-id "$APP_ID" \
  --domain-name "rodolfo-silva.com" \
  --sub-domain-settings '[{"prefix": "exemplo-portfolio", "branchName": "master"}]' \
  --profile conta-aws 2>&1)

if [ $? -ne 0 ]; then
    echo -e "${RED}Falha ao associar o domínio customizado. Detalhes:${NC}"
    echo "$DOMAIN_OUT"
    exit 1
fi

echo -e "${BLUE}====================================================================${NC}"
echo -e "${GREEN}          🎉 IMPLANTAÇÃO CONFIGURADA COM SUCESSO! 🎉${NC}"
echo -e "${BLUE}====================================================================${NC}"
echo ""
echo -e "${GREEN}O seu novo portfólio profissional está sendo compilado na nuvem AWS!${NC}"
echo -e "Subdomínio em processo de ativação (SSL/DNS):"
echo -e "👉 ${YELLOW}https://exemplo-portfolio.rodolfo-silva.com${NC}"
echo ""
echo -e "${BLUE}Dica:${NC} Você pode monitorar o progresso do build diretamente no painel web"
echo -e "da AWS Amplify Console ou usando o comando:"
echo -e "  aws amplify list-jobs --app-id $APP_ID --branch-name master --profile conta-aws"
echo ""
