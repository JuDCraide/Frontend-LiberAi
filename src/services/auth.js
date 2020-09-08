export const getId = () => localStorage.getItem("id");

export const salvar_id = (id) => {
  localStorage.setItem("id", id); 
};

export const isLogado = () => {
    if(getId()){
	return true;
    }
	return false;
 }