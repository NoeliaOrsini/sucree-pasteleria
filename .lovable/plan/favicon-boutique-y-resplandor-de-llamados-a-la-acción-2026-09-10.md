# Favicon boutique y resplandor de llamados a la acción

## Cambios
- Crear un favicon SVG minimalista con gorro de chef en borgoña `#800020`, preparado para verse con claridad en tamaños pequeños.
- Reemplazar la referencia al favicon predeterminado y retirar el archivo antiguo de Lovable.
- Definir un estilo reutilizable para los botones principales con fondo borgoña, texto marfil, transición fluida y el halo dorado/crema solicitado.
- Aplicar ese estilo al botón “Hacé tu pedido”, a los botones “Pedidos” del encabezado y al acceso flotante de WhatsApp.
- Mantener los controles secundarios, como menú y galería, sin el efecto de llamado a la acción.

## Verificación
- Confirmar que el sitio compile sin errores.
- Comprobar en la vista previa que el favicon cargue y que el hover conserve exactamente la sombra y escala solicitadas.

## Detalles técnicos
- El efecto se centralizará en una utilidad CSS con `!important` únicamente para `box-shadow`, `transform` y el color de fondo en hover, evitando que otras clases lo sobrescriban.
- Se respetará la reducción de movimiento del sistema desactivando la escala cuando corresponda.
