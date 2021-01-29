import {useForm} from 'react-hook-form';
import Swal from 'sweetalert2';
import Router from 'next/router'


const FormAdoption = (props)=>{
    const {register,errors,handleSubmit} = useForm();
    const onSubmit = (data,e)=>{
        if(props.pet){
            const dataFromLocalStorage = JSON.parse(localStorage.getItem('pets'));
            if(dataFromLocalStorage){
                dataFromLocalStorage[props.index] = data;
                localStorage.setItem('pets', JSON.stringify(dataFromLocalStorage));
                Router.push('/');
            }
        }else{
            Swal.fire({
                title: 'Success',
                text: 'Post added',
                icon: 'success',
            });
            const dataFromLocalStorage = JSON.parse(localStorage.getItem('pets'));
            if(dataFromLocalStorage){
                dataFromLocalStorage.push(data);
                localStorage.setItem('pets', JSON.stringify(dataFromLocalStorage));
            }
        }
        e.target.reset();    
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className='mt-3 d-flex flex-column align-items-center'>
            <div className="form-group col-12 col-md-10 col-lg-8">
                <input name='name' 
                ref={register({
                    required: {value:true, message: 'Pet Name required'}
                })}
                defaultValue={props.pet?props.pet.name:null}
                className="form-control form-control-md" type="text" placeholder="Pet Name"/>
                <span className='text-danger text-small d-block mt-2'>
                    {errors?.name?.message}
                </span>
            </div>

            <div className="form-group col-12 col-md-10 col-lg-8">
                <textarea name='description'
                ref={register({required: {value:true,message:'Description required'}, minLength:{
                    value: 30,
                    message: 'Minimun 30 caracters'
                }})}
                defaultValue={props.pet?props.pet.description:null}
                className="form-control" placeholder='Pet Description'  rows="5"/>
                <span className='text-danger text-small d-block mt-2'>
                    {errors?.description?.message}
                </span>
            </div>

            <div className="form-group col-12 col-md-10 col-lg-8">
                <select name='family' className="custom-select mr-sm-2"
                ref={register({required: {value:true,message:'Family required'}})}>
                    <option value="Leporidae">Leporidae</option>
                    <option value="Birds">Birds</option>
                    <option value="Fishes">Fishes</option>
                    <option value="Canidos">Canidos</option>
                </select>
                <span className='text-danger text-small d-block mt-2'>
                    {errors?.family?.message}
                </span>
             </div>

             <div className="form-group col-12 col-md-10 col-lg-8">
                <input
                ref={register({required: {value:true,message:'Weight required'}})}
                defaultValue={props.pet?props.pet.weight:null}
                name='weight' className="form-control form-control-md" type="text" placeholder="Weight"/>
                <span className='text-danger text-small d-block mt-2'>
                    {errors?.weight?.message}
                </span>
             </div>

             <div className="form-group col-12 col-md-10 col-lg-8">
                <input
                ref={register({required: {value:true,message:'Url image required'}})}
                defaultValue={props.pet?props.pet.picture:null}
                name='picture' className="form-control form-control-md" type="text" placeholder="Url Image"/>
                <span className='text-danger text-small d-block mt-2'>
                    {errors?.picture?.message}
                </span>
             </div>


             <div className="col-auto">
                <div className="form-check ml-2 ml-lg-0">
                    <input
                    defaultChecked={props.pet?props.pet.tame:null}
                    name='tame' ref={register} className="form-check-input" type="checkbox"/>
                    <label className="form-check-label" >
                    It's tame?
                    </label>
                </div>
            </div>
                <div className="form-group col-12 col-md-10 col-lg-8 d-flex justify-content-center mt-2">
                    <button className="btn rounded-pill btn-primary">{props.pet?'Edit pet':'Post pet'}</button>
                </div> 
             
        </form>
    )
}

export default FormAdoption;