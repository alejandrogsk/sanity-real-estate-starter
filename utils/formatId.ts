export default function(word: string):string{
    return word.toLocaleLowerCase().replaceAll("&","-").replaceAll(" ","-").replace("---","-")
}