export default function BoilinhVerdict({celsius = 0}) {
        if(celsius >= 100){
            return <p>water would boild</p>
        }
        return <p>water would not boild</p>
}


