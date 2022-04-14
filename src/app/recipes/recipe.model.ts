// Recipes model (Objects will be created from that class model)

export class Recipe 
{
    public name: string;
    public description: string;
    public imagePath: string;


    constructor(Name: string, Description: string, ImagePath: string)
    {
        this.name = Name;
        this.description = Description;
        this.imagePath = ImagePath;
    }

}