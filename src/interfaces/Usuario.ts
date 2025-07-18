export type EstadoUsuario = 'Activo' | 'Inactivo' | 'Bloqueado';
export type TipoRegistro = 'Completo' | 'Parcial' | 'Google' | 'Facebook';

export interface UsuarioAttributes {
  cod_usuario: string;
  correo: string;
  contraseña?: string;
  nombre?: string;
  apellido?: string;
  razon_social?: string;
  telefono?: string;
  telefono_movil?: string;
  fecha_registro?: Date;
  estado?: EstadoUsuario;
  ultimo_inicio_sesion?: Date;
  recibir_notificaciones?: boolean;
  tipo_registro?: TipoRegistro;
}

export type UsuarioCreationAttributes = Partial<
  Pick<
    UsuarioAttributes,
    | 'contraseña'
    | 'nombre'
    | 'apellido'
    | 'razon_social'
    | 'telefono'
    | 'telefono_movil'
    | 'ultimo_inicio_sesion'
    | 'recibir_notificaciones'
  >
> &
  Pick<UsuarioAttributes, 'cod_usuario' | 'correo' | 'estado' | 'fecha_registro' | 'tipo_registro'>;
