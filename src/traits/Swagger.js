/**
 * @swagger
 * components:
 *   schemas:
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *     AuthToken:
 *       type: object
 *       properties:
 *         token:
 *           type: string
 *       example:
 *         token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 */

/**
 * @swagger
 * securitySchemes:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 *     description: Use a palavra-chave 'Bearer' seguida por um espaço antes do token JWT.
 */

/**
 * @swagger
 * tags:
 *   - name: Ativos
 *     description: Operações relacionadas a ativos
 *   - name: Auth
 *     description: Operações relacionadas à autenticação
 *   - name: Diagnóstico
 *     description: Operações relacionadas a diagnósticos
 *   - name: Manutenção
 *     description: Operações relacionadas a manutenção
 *   - name: User
 *     description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /register/ativo:
 *   post:
 *     tags:
 *       - Ativos
 *     summary: Registra um ativo (requer token JWT)
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AtivoRequest'
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '401':
 *         description: Não autorizado. Token JWT inválido.
 *       '500':
 *         $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /ativo/{id}:
 *   get:
 *     tags:
 *       - Ativos
 *     summary: Obtém informações de um ativo pelo ID (requer token JWT)
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do ativo
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '401':
 *         description: Não autorizado. Token JWT inválido.
 *       '404':
 *         $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Realiza login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *     responses:
 *       '200':
 *         description: Sucesso. Retorna um token JWT.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthToken'
 *       '500':
 *         $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /logout:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Realiza logout (requer token JWT)
 *     security:
 *       - Bearer: []
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '401':
 *         description: Não autorizado. Token JWT inválido.
 *       '500':
 *         $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /register/diagnostico:
 *   post:
 *     tags:
 *       - Diagnóstico
 *     summary: Registra um diagnóstico (requer token JWT)
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DiagnosticoRequest'
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '401':
 *         description: Não autorizado. Token JWT inválido.
 *       '500':
 *         $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /diagnostico/{id}:
 *   get:
 *     tags:
 *       - Diagnóstico
 *     summary: Obtém informações de um diagnóstico pelo ID (requer token JWT)
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do diagnóstico
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '401':
 *         description: Não autorizado. Token JWT inválido.
 *       '404':
 *         $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /register/manutencao:
 *   post:
 *     tags:
 *       - Manutenção
 *     summary: Registra uma manutenção (requer token JWT)
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ManutencaoRequest'
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '401':
 *         description: Não autorizado. Token JWT inválido.
 *       '500':
 *         $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /manutencao/{id}:
 *   get:
 *     tags:
 *       - Manutenção
 *     summary: Obtém informações de uma manutenção pelo ID (requer token JWT)
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da manutenção
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '401':
 *         description: Não autorizado. Token JWT inválido.
 *       '404':
 *         $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /register:
 *   post:
 *     tags:
 *       - User
 *     summary: Registra um usuário (requer token JWT)
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRequest'
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '401':
 *         description: Não autorizado. Token JWT inválido.
 *       '500':
 *         $ref: '#/components/schemas/ErrorResponse'
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     ManutencaoRequest:
 *       type: object
 *       properties:
 *         ativoId:
 *           type: string
 *           format: uuid
 *           description: ID do ativo relacionado à manutenção
 *         userId:
 *           type: string
 *           format: uuid
 *           description: ID do usuário responsável pela manutenção
 *         report:
 *           type: string
 *           description: Relatório da manutenção
 *       required:
 *         - ativoId
 *         - userId
 *         - report
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     LoginRequest:
 *       type: object
 *       properties:
 *         cpf:
 *           type: string
 *           description: CPF do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário
 *       required:
 *         - cpf
 *         - password
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DiagnosticoRequest:
 *       type: object
 *       properties:
 *         ativoId:
 *           type: string
 *           format: uuid
 *           description: ID do ativo relacionado ao diagnóstico
 *         userId:
 *           type: string
 *           format: uuid
 *           description: ID do usuário associado ao diagnóstico
 *         report:
 *           type: string
 *           description: Relatório do diagnóstico
 *         materials:
 *           type: array
 *           items:
 *             oneOf:
 *               - type: object
 *                 properties:
 *                   quantity:
 *                     type: integer
 *                   name:
 *                     type: string
 *           description: Lista de materiais usados no diagnóstico
 *       required:
 *         - ativoId
 *         - userId
 *         - report
 *         - materials
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UserRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nome do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário
 *         confirm_password:
 *           type: string
 *           description: Confirmação da senha do usuário
 *         cpf:
 *           type: string
 *           description: CPF do usuário
 *         email:
 *           type: string
 *           format: email
 *           description: E-mail do usuário
 *         image:
 *           type: string
 *           description: URL da imagem do usuário (opcional)
 *       required:
 *         - name
 *         - password
 *         - confirm_password
 *         - cpf
 *         - email
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     AtivoRequest:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *           format: uuid
 *           description: ID do usuário associado ao cadastro do ativo
 *         name:
 *           type: string
 *           description: Nome do ativo
 *         numserie:
 *           type: string
 *           description: Número de série do ativo
 *         manufacturer:
 *           type: string
 *           description: Fabricante do ativo
 *         tipo:
 *           type: string
 *           description: Tipo do ativo
 *         model:
 *           type: string
 *           description: Modelo do ativo
 *         department:
 *           type: string
 *           description: Departamento associado ao ativo
 *         location:
 *           type: string
 *           description: Localização do ativo
 *         manufacturingDate:
 *           type: string
 *           format: date
 *           description: Data de fabricação do ativo (formato YYYY-MM-DD)
 *       required:
 *         - userId
 *         - name
 *         - numserie
 *         - manufacturer
 *         - tipo
 *         - model
 *         - department
 *         - location
 *         - manufacturingDate
 */