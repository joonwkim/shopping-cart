import { GoogleUser } from '@/app/auth/types'
import prisma from '@/lib/prisma'
import bcrypt from "bcrypt";

export async function getUsers() {
    try {
        const users = await prisma.user.findMany()
        return { users }
    } catch (error) {
        return ({ error })
    }
}

export async function isUserRegistered(email: string): Promise<boolean> {
    return await getUserByEmail(email) != null
}
export async function isPasswordValid(email: string, password: string): Promise<boolean> {
    try {
        if (!email || !password) return false
        var user: any = await getUserByEmail(email)
        const result = await bcrypt.compare(password, user.password).catch((e) => false);
        return result;
    } catch (error: any) {
        const errorMessage = error.response.data.message;
        throw new Error(errorMessage);
    }
}

export async function createUser(input: any) {
    try {

        const user = await prisma.user.create({ data: input })
        return { user }
    }
    catch (error) {
        return ('user not created')
    }
}

export async function getUserByEmail(emailInput: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: emailInput,
            },
        })
        return user
    } catch (error) {
        return ({ error })
    }
}

export async function updateUser(email: string, input: any) {
    try {
        const updateUser = await prisma.user.update({
            where: {
                email: email,
            },
            data: input
        })

    } catch (error) {
        return ({ error })
    }
}

export async function findUpdateGoogleUser(email: string, input: GoogleUser) {
    try {


        let user = await getUserByEmail(email)
        if (!user) {
            const userCreated = await createUser(input)
        }
        else {
            const userStored = user as GoogleUser
            input.roles = userStored.roles
            const userUpdated = await updateUser(email, input)
        }
        return true;
    } catch (error) {
        return ({ error })
    }
}