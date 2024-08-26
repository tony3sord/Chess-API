/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - lastname
 *         - profilename
 *         - email
 *         - password
 *       properties:
 *         name:
 *           type: string
 *           description: The user's first name
 *         lastname:
 *           type: string
 *           description: The user's last name
 *         profilename:
 *           type: string
 *           description: The user's profile name
 *         email:
 *           type: string
 *           description: The user's email address
 *         password:
 *           type: string
 *           description: The user's password
 */
export interface User {
  name: string;
  lastname: string;
  profilename: string;
  email: string;
  password: string;
}
