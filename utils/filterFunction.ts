// This function recives the string or array of strings from query params for each type of query 
// Example: ?operation=for-sale  - This would be a string
// Example: ?operation=for-sale&operation=for-rent  - This would be an array
//import filterTypes from "./filterTypes";
import { operationOptions } from './filterTypes';

export default function filterOperations(val:string|string[]|undefined):string {
    if (typeof val === 'string' && operationOptions[val]) {
        return operationOptions[val];
    }
    
    return operationOptions["default-value"]
} 



