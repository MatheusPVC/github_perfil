import { useState, useEffect} from "react";

const Formulario = () => {
    const [materiaA,setMateriaA] = useState(0);
    const [materiaB,setMateriaB] = useState(0);
    const [materiaC,setMateriaC] = useState(0);
    const [nome, setNome] = useState('');
    const [lista,setLista] = useState([1,2,3,4,5]);

    useEffect(() => {
        console.log('O componente iniciou')
    }, [])

    useEffect(() => {
        console.log('O estado nome mudou')
    }, [nome])

    useEffect(() => {
        console.log('O estado matéria A mudou para : ' + materiaA)
    }, [materiaA])

    const alteraNome = (evento) => {
        //setNome(evento.target.value);
        setNome(estadoAnterior => {

            //estadoAnterior = novoValor
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, não foi aprovado</p>
            )
        }
    }

    
    return (
        <form>
            <ul>
                {lista.map(item => (<li key={item}>{item}</li>))}
            </ul>
            <input type="text" placeholder='Seu nome' onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )

}
export default Formulario;