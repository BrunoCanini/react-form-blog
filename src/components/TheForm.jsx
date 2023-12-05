import { useState } from "react"

export default function TheForm(){

    const initialFormData = {
        title: ""
    }

    const [postList, setPostList] = useState([]);

    const [formData, setFormData] = useState(initialFormData)

    function updateFormData(newValue, keyPosition){
        // clono l oggetto fromData
        // usiamo lo spread per togliere quealsiasi riferimento allo state attuale
        const newFormData = {...formData};
        // aggiorno la chiave
        newFormData[keyPosition] = newValue;
        // passo l oggetto modificato al setFormData
        setFormData(newFormData);
    }

    function handleFormSubmit(e){
        // leviamo il refresh del form
        e.preventDefault();
        // aggiungiamo il post
        const newPostList = [ ...postList, formData];
        // resetto il form
        setPostList(newPostList);
    }

    function removePost(i){
        
        const newPostList = [...postList]

        newPostList.splice(i, 1)

        setPostList(newPostList)
    }

    return(

            <div className="container mx-auto pt-10 w-[600px]">
                <h1 className="text-center font-bold"> FORM </h1>

                <form className="flex flex-col gap-4 mx-auto pt-10" action="" onSubmit={handleFormSubmit}>

                    <label className="block font-medium mb-2" htmlFor="title">Titolo</label>
                    <input className="border p-4" type="text" id="title" placeholder="Insert title" 
                        value={formData.title}
                        onChange={(e) => updateFormData(e.target.value, 'title')}       
                    />
                    
                    <button className=" w-[100px] p-3 bg-blue-400 hover:bg-blue-600 text-white">Submit</button>
                </form>

                <hr className="my-10"/>

                <div className="mt-10">

                {postList.length > 0 ? (
                        <ul className="flex flex-col gap-3">
                            {postList.map((post, i) => (
                            <li className="" key={i}>{post.title}
                                <button className="p-1 bg-red-500 text-white mx-5"
                                onClick={() => removePost(i)}>Delete</button>
                            </li>
                            ))}
                        </ul>
                    ) : (
                    <h2 className="text-center">Non sono presenti elementi nel menù</h2>
                    )}

                </div>

            </div>

    )
}