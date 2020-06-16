# F#

- Function

    ``` fsharp
    val functionName : domain -> range
    ```

    Domain: Set of Possible inputs   
    Range: Set of possible output values (subset of Co-domain)

- Comma marks a tuple type - If you see one it's almost certainly part of a tuple

    ``` fsharp
    ("hello",1) // string * int
    ```

- Pipe Function

    - Allows to put the function argument in front of the function.   
    - For function with multiple parameters, input is the last paramerter. Function is partially applied to make it a single parameter function.   

    ``` fsharp
    let (|>) x f = f x
    ```

- Reverse Pipe Function

    - Does nothing different; Makes code cleaner

    ``` fsharp
    let (<|) f x = f x

    printf "%i" 1+2          // error
    printf "%i" (1+2)        // using parens
    printf "%i" <| 1+2       // using reverse pipe

    1+2 |> add <| 3+4        // pseudo infix
    ```
- Modules

    - Module consists of a set of related functions that act on a data type
    - Top level modules does not need an '=', nor special indentation. Must be the first declaration in file.
    - Namespace is default and no defaults
    - All function and value declarations needs to be part of module. Namespaces can have type declarations

- Collection
    - List,Array, seq, Map and Set are the available [collection types](https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/fsharp-collection-types)
    - Array collection has mutable elements ?


### Record Type  
- "Labeled Tuples" : can store multiple different elements in single value
- Each element has a name that can be used to access it
- to declare a record type we have to specify the types of the fields and their names 
- to create a value of a record specify values for all its fields in curly braces. No need to specify name of type, this is ingerred
- if compiler cannot detect type it will throw an error
- Since records are immutable, to modify a value we need to create a new record with the modified value
- Explicitly copying over all record values is a bit awkward and brittle. When additional values are added to record type all places will need an update
- Using WITH keyword we need to state only the fields that needs change. All other fields will be copied over as it 

``` fsharp
let rc2 = { rc with Left = rc.Left + 100 }
```

USING RECORD TYPES     

- When used in a function compiler tries to automatically deduce the type. It uses names of fields accessed. 
- If there are record types with similar field names and only those fields referred then we need to explicitly statethe type.
