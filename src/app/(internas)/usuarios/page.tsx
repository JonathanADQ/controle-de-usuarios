"use client";
import useUsuarios from "@/app/data/hooks/useUsuarios";
import Pagina from "@/components/template/Pagina";
import Titulo from "@/components/template/Titulo";
import FormularioUsuario from "@/components/usuario/FormularioUsuario";
import ListaUsuario from "@/components/usuario/ListaUsuario";
import { IconPlus, IconUser } from "@tabler/icons-react";

export default function Page() {
  const { usuario, usuarios, salvar, excluir, alterarUsuario } = useUsuarios();

  return (
    <Pagina className="flex flex-col gap-10">
      <Titulo
        icone={IconUser}
        principal="Usuários"
        secundario="Cadastro de Usuários"
      />
      <div className="flex justify-end">
        <button
          className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md"
          onClick={() => alterarUsuario({})}
        >
          <IconPlus />
          <span> Novo Usuário</span>
        </button>
      </div>
      {usuario ? (
        <FormularioUsuario
          usuario={usuario}
          onChange={alterarUsuario}
          salvar={salvar}
          cancelar={() => alterarUsuario(null)}
          excluir={excluir}
        />
      ) : (
        <ListaUsuario usuarios={usuarios} onClick={alterarUsuario} />
      )}
    </Pagina>
  );
}
