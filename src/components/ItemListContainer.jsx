import React,{useState, useEffect} from "react";
import {MyPokemones} from '../myJs/pokemons'
import ItemList from "./ItemList";
import { Container } from "react-bootstrap";

function ItemListContainer(props) {

  const [pokemones, setPokemones] = useState([])

    const getPokemones = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(MyPokemones);
            },2000);
        })
    } 

    useEffect( () => {
        getPokemones().then( (res) => {
            setPokemones(res)
        }).finally( () => {
            console.log("MIS POKES")
        })
    }, [])

  return (
    <Container className="mb-5">
        {props.gretting}
        <ItemList items={pokemones}></ItemList>
    </Container>
  );
}

export default ItemListContainer;