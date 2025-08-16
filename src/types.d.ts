export interface Product {
  id: string;
  marca: string;
  nombre: string;
  vendedor: string;
  precioActual: number;
  precioOriginal: number;
  descuento: number;
  envio:
    | "Compra internacional"
    | "ENVÍO GRATIS"
    | "Llega gratis mañana"
    | "Llega mañana"
    | "Retira mañana"
    | null;
  retiro:
    | "Compra internacional"
    | "ENVÍO GRATIS"
    | "Llega gratis mañana"
    | "Llega mañana"
    | "Retira mañana"
    | null;
  calificacion: number | null;
  tipo: "ENVÍO GRATIS" | "Patrocinado" | "REACONDICIONADO" | null;
  src: string;
}

export interface ShoppingCarItem {
  count: number;
  product: Product;
}
