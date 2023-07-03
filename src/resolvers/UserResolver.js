const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { GraphQLNonNull } = require('graphql');
const { User } = require('../models/User');
const { connectDB } = require('../database');
const { generateJWT } = require('../auth');

const pool = connectDB();
const userResolver = {
    signUp: async ({ input }) => {
        const { username, email, password, role } = input;

        try {
            const userExists = await pool.query('SELECT * FROM users WHERE email = $1', ['john@example.com']);
            if (userExists.rows.length > 0) {
                throw new Error('Email already exists');
            }
            const hashedPassword = await bcrypt.hash(password, 10);

            const insertedUser = await pool.query(
                'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
                [username, email, hashedPassword, role]
            );

            const jwtToken = generateJWT(insertedUser.rows[0]);

            const newUser = new User(
                insertedUser.rows[0].id,
                insertedUser.rows[0].username,
                insertedUser.rows[0].email,
                insertedUser.rows[0].password,
                insertedUser.rows[0].role,
                jwtToken
            );
            console.log(newUser);
            return newUser;
        } catch (error) {
            console.error(error);
            throw new Error('Sign up failed');
        }
    },

    getUserByEmail: async ({ email }) => {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length > 0) {
            const userData = user.rows[0];
            const jwtToken = generateJWT(userData);

            return new User(
                userData.id,
                userData.username,
                userData.email,
                userData.password,
                userData.role,
                jwtToken
            );
        } else {
            throw new Error('User not found');
        }
    },
    signIn: async ({ input }) => {
        const { email, password } = input;

        try {
            const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

            if (user.rows.length > 0) {
                const userData = user.rows[0];
                const passwordMatch = await bcrypt.compare(password, userData.password);

                if (passwordMatch) {
                    const jwtToken = generateJWT(userData);

                    return new User(
                        userData.id,
                        userData.username,
                        userData.email,
                        userData.password,
                        userData.role,
                        jwtToken
                    );
                } else {
                    throw new Error('Invalid password');
                }
            } else {
                throw new Error('User not found');
            }
        } catch (error) {
            console.error(error);
            throw new Error('Sign in failed');
        }
    }
};

module.exports = { userResolver };
