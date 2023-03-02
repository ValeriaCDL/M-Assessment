import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Image from 'react-bootstrap/Image';

const ProfileDetail = ({ pokemon, isUser }) => {
    console.log([pokemon]);
    return (
            <Col sm={12} className="bg-theme-light rounded m-3 p-4">
                <div className="text-center">
                        <Image src={pokemon.sprites.front_default} roundedCircle thumbnail width="100px" />
                        <h3 className="text-center mb-2"> { isUser? localStorage.getItem("username"):""} </h3>
                    </div>

                    <div className="bg-theme rounded p-2">
                        <div className="ms-1">
                            <div><span style={{ fontWeight: 'bold' }}>Pokemon:</span> {pokemon.name} </div>
                            <div><span style={{ fontWeight: 'bold' }}>Types: </span> 
                                { pokemon.types.map((t,i,arr) => {
                                        return i === arr.length - 1? <span key={i}> {t.type.name}</span>:<span key={i}> {t.type.name},</span>;
                                })} 
                            </div>
                            <div><span style={{ fontWeight: 'bold' }}>Abilities: </span>
                                { pokemon.abilities.map((a,i,arr) => {
                                        return i === arr.length - 1? <span key={i}> {a.ability.name}</span>:<span key={i}> {a.ability.name},</span>;
                                })} 
                            </div>
                        </div>
                </div>

                <div className="bg-theme rounded p-2 mt-2">
                    <span style={{ fontWeight: 'bold' }}>Moves:</span>
                    <div className="d-flex justify-content-between flex-wrap">
                    { pokemon.moves.map((m,i,arr) => {
                            return <button className="btn btn-light m-1">{m.move.name}</button>
                    })}
                    </div>
                </div>
            </Col>
    )

}

export default ProfileDetail;