import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default {
    async createUser(req, res) {
        try {
            const { name, email } = req.body;

            let user = await prisma.user.findUnique({
                where: {
                    email
                }
            });
            if (user) {
                return res.status(400).json({ message: 'User already exists!' });
            }
            user = await prisma.user.create({
                data: {
                    name,
                    email
                }
            });
            return res.json(user);
        } catch (error) {
            return res.status(400).json({ message: 'Error creating user!', error });
        }

    },
    async listUsers(req, res) {
        try {
            const users = await prisma.user.findMany();
            return res.json(users);
        } catch (error) {
            return res.status(400).json({ message: 'Error listing users!', error });
        }
    },
    async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!user) {
                return res.status(400).json({ message: 'User not found!' });
            }
            return res.json(user);
        } catch (error) {
            return res.status(400).json({ message: 'Error getting user!', error });
        }
    },
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            let user = await prisma.user.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!user) {
                return res.status(400).json({ message: 'User not found!' });
            }
            user = await prisma.user.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name,
                    email
                }
            });
            return res.json(user);
        } catch (error) {
            return res.status(400).json({ message: 'Error updating user!', error });
        }
    },
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const user = await prisma.user.findUnique({
                where: {
                    id: Number(id)
                }
            });
            if (!user) {
                return res.status(400).json({ message: 'User not found!' });
            }
            await prisma.user.delete({
                where: {
                    id: Number(id)
                }
            });
            return res.json({ message: 'User deleted successfully!' });
        } catch (error) {
            return res.status(400).json({ message: 'Error deleting user!', error });
        }
    }
}