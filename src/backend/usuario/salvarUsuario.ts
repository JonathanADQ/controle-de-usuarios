'use server'

import { UsuarioType} from "@/core/model/Usuario";
import Id from "@/core/utils/Id";
import RepositorioUsuario from "./RepositorioUsuario";


export default async function salvarUsuario(usuario: Partial<UsuarioType>) {

    const novoUsuario = {
        ...usuario,
        id: usuario.id ?? Id.novo,
    }
    return RepositorioUsuario.salvar(novoUsuario as UsuarioType)
}