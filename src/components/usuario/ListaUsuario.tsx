import { UsuarioType } from "@/core/model/Usuario";
import LinhaUsuario from "./LinhaUsuario";

export interface ListaUsuarioProps {
  usuarios: any;
  onClick: (usuario: UsuarioType) => void;
}

export default function ListaUsuario(props: ListaUsuarioProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.usuarios.map((usuario: UsuarioType) => {
        return (
          <LinhaUsuario
            key={usuario.id}
            usuario={usuario}
            onClick={props.onClick}
          />
        );
      })}
    </div>
  );
}
