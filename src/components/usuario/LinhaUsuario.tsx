import { UsuarioType } from "@/core/model/Usuario";
import Image from "next/image";

export interface LinhaUsuarioProps {
  usuario: UsuarioType;
  onClick: (usuario: UsuarioType) => void;
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
  return (
    <div
      className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md cursor-pointer"
      onClick={() => props.onClick?.(props.usuario)}
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
        width={80}
        height={80}
        className="rounded-full"
        alt="Avatar"
      />
      <div className="flex flex-col">
        <span className="text-xl font-black">{props.usuario.nome}</span>
        <span className="text-sm text-zinc-400">{props.usuario.email}</span>
      </div>
    </div>
  );
}
