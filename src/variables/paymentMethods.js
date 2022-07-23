import { faCreditCard, faWallet, faTruck } from '@fortawesome/free-solid-svg-icons'

export let paymentMethods = [ 
    { 
        description: '3 , 6 y 12 cuotas sin interés en todos los productos, con tarjetas de todos los bancos', 
        icon: faCreditCard
    },
    {
        description: '10% de descuento con pagos en efectivo', 
        icon: faWallet
    },
    {
        description:'Entregas a domicilio dentro de CABA y envío gratis con compras superiores a $4999',
        icon: faTruck
    }
]