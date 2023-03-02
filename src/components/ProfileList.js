import Image from 'react-bootstrap/Image';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProfileDetail from './ProfileDetail';

import { useEffect, useState } from "react";

const ProfileList = () => {

    const [pokelist, setPokelist] = useState([]);
    const [detailedPokelist, setDetailedPokelist] = useState([]);
    const [userPokemon,setUserPokemon] = useState({}); 
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPokemon,setSelectedPokemon] = useState({});
    
    const getPokelist = async () => {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10"); 
        let data = await response.json(); 
        setPokelist(data.results);
    }

    const getPokemonDetails = async () => {

        if(pokelist.length === 0){
            return 0;
        }

        const dataArray = await Promise.all(pokelist.map(async p => {
            const resp = await fetch(p.url); //  url: 'https://pokeapi.co/api/v2/pokemon/{id or name}]/'}
            return resp.json();
          }));
        
        let shuffledArray = dataArray.sort((a, b) => 0.5 - Math.random());
        setUserPokemon(shuffledArray.pop());
        setDetailedPokelist(shuffledArray);
    }

    useEffect(() => { getPokelist() },[]);
    useEffect(() => { getPokemonDetails() }, [pokelist]);
    useEffect(() => { detailedPokelist.length > 0 ? setIsLoading(false) : setIsLoading(true)}, [detailedPokelist]);

    return (
        <>
            {isLoading ? <h3>Loading...</h3> : 
            
            <main role="main" className="container mt-5 mb-5">
            
              { selectedPokemon && Object.keys(selectedPokemon).length !== 0 ? 
                <>
                    <button className="btn btn-form-custom ms-3" onClick={()=> setSelectedPokemon({})}>Back</button>
                    <ProfileDetail pokemon={selectedPokemon} isUser={selectedPokemon == userPokemon}/> 
                </>: 
                <>
                    <div className="row justify-content-center">
                    <h2 className="col-sm-12 text-center page-title">Your Pokémon <br/> profile is:</h2>
                    
                    
                    <div className="col-sm-12 col-md-8 bg-theme-light rounded m-3 p-4" onClick={()=> setSelectedPokemon(userPokemon)}>

                        <div className="text-center">
                            <Image src={userPokemon.sprites.front_default} roundedCircle thumbnail width="100px" />
                            <h3 className="text-center mb-2"> { localStorage.getItem("username")} </h3>
                        </div>

                        <div className="bg-theme rounded p-2">
                            <div className="ms-1">
                                <div><span style={{ fontWeight: 'bold' }}>Pokemon:</span> {userPokemon.name} </div>
                                <div><span style={{ fontWeight: 'bold' }}>Types: </span> 
                                    { userPokemon.types.map((t,i,arr) => {
                                            return i === arr.length - 1? <span key={i}> {t.type.name}</span>:<span key={i}> {t.type.name},</span>;
                                    })} 
                                </div>
                                <div><span style={{ fontWeight: 'bold' }}>Abilities: </span>
                                    { userPokemon.abilities.map((a,i,arr) => {
                                            return i === arr.length - 1? <span key={i}> {a.ability.name}</span>:<span key={i}> {a.ability.name},</span>;
                                    })} 
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8">Other Pokémon profiles:</div>
                    
                    {detailedPokelist.map(p => (

                    <Col sm={12} md={8} className="bg-theme-light rounded m-3 p-4" key={p.id} onClick={()=> setSelectedPokemon(p)}>
                        <Row>
                            <Col className="text-center">
                                <Image src={p.sprites.front_default} roundedCircle thumbnail style={{ minHeight: '70px', maxHeight: '90px' }}/>
                            </Col>
                            <Col xs={8} lg={10} className="bg-theme rounded p-2">
                                <div className="ms-1">
                                    <div><span style={{ fontWeight: 'bold' }}>Pokemon:</span> {p.name} </div>
                                    <div><span style={{ fontWeight: 'bold' }}>Types: </span> 
                                        { p.types.map((t,i,arr) => {
                                            return i === arr.length - 1? <span key={i}> {t.type.name}</span>:<span key={i}> {t.type.name},</span>;
                                        })} 
                                    </div>
                                    <div><span style={{ fontWeight: 'bold' }}>Abilities: </span>
                                        { p.abilities.map((a,i,arr) => {
                                            return i === arr.length - 1? <span key={i}> {a.ability.name}</span>:<span key={i}> {a.ability.name},</span>;
                                        })} 
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    ))}
                    
                    

                </div>
                </>
              }
            
            
            </main>
            }
        </>

    )
}
export default ProfileList;