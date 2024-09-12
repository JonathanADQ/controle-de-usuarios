import { UsuarioType } from "@/core/model/Usuario";
import { PrismaClient } from "@prisma/client";

class RepositorioUsuario {
    private static db: PrismaClient = new PrismaClient()

    static async salvar(usuario: UsuarioType): Promise<UsuarioType> {
        return await this.db.usuario.upsert({ 
            where: { id: usuario.id },
            update: usuario,
            create: usuario,
         })
    }

    static async obterTodos(): Promise<UsuarioType []> {
        return await this.db.usuario.findMany()
    }

    static async obterPorId(id: string): Promise<UsuarioType> {
        const usuario = await this.db.usuario.findUnique({
            where: { id },
        })
        return usuario as UsuarioType
    }

    static async excluir(id: string): Promise<void> {
        await this.db.usuario.delete({
            where: { id },
        })
    }
}    
export default RepositorioUsuario