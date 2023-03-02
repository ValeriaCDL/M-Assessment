
import pokeballPic from '../assets/pokeball-pic.png';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const postLogin = async (formData) => {
        localStorage.setItem("username", formData.name);  
        navigate("/list");
    }

    return (
        <main role="main" className="flex items-center justify-center">
            <form className="container mt-5 mb-5" onSubmit={handleSubmit(postLogin)}>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="row bg-theme-light p-5 rounded">
                            <div className="form-group  mb-2">
                                
                                <div className="d-flex align-items-center">
                                    <h3 className="me-2 page-title">Welcome! </h3>
                                    <img src={pokeballPic} className="img-fluid form-image rounded" alt="Pokeball" width="50px" height="50px" />
                                </div>

                                <p>Log In to check your Pokémon profile</p>
                            </div>

                            <div className="col-sm-8">
                                <div className="form-group mb-2">
                                    {/* NAME */}
                                    <label htmlFor="name" className="pb-2">Name</label>
                                    <input id="name" type="text" className="form-control border border-secondary"
                                        placeholder="Enter your name" {...register("name", { required: "This is a required field" })} />
                                    <small className="text-warning"> {errors.name?.message} </small>
                                </div>
                                <div className="form-group mb-2">
                                    {/* EMAIL */}
                                    <label htmlFor="emailAddress" className="pb-2">Email address</label>  
                                    <input id="emailAddress" type="email" className="form-control border border-secondary"
                                        placeholder="Enter your email address" {...register("emailAddress", { required: "This is a required field" })} />
                                    <small className="text-warning"> {errors.emailAddress?.message} </small>  {/* VALERIA: CHECK */}
                                </div>
                                

                                {/* LOGIN BUTTON */}
                                <div className="form-group">
                                    <button type="submit" id="submitButton" className="btn btn-form-custom mt-2">Log In</button> {/* VALERIA: CHECK Me pregunto si lo necesito o si el ID causara conflicto, por ser una sola pagina...*/}
                                </div>
                            </div>


                        </div>


                    </div>
                    
                </div>



            </form>
        </main>
    )
}
export default Login;
