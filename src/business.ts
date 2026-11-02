export const business={name:'Leatherline Ltd',phone:'23058655458',displayPhone:'+230 5865 5458',email:'leatherlineltd@gmail.com',map:'https://maps.app.goo.gl/2wzEznLQMCjWoEE79'};
export const whatsapp=(message='Hello, I would like a quote for upholstery services.')=>`https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
// Only add comparisons after the business confirms both photos depict the same project.
export const transformations: {title:string;category:string;before:number;after:number}[]=[];
