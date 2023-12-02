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
 *           type: integer
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
 *           type: integer
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
 *           type: integer
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
 *     responses:
 *       '200':
 *         description: Sucesso
 *       '401':
 *         description: Não autorizado. Token JWT inválido.
 *       '500':
 *         $ref: '#/components/schemas/ErrorResponse'
 */
