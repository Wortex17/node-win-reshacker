# node-win-reshacker
A soft wrapper around the Resource Hacker for Windows by Angus Johnson

## Usage

```js
var reshacker = require("../win-reshacker");

reshacker.modifySync('cooltool.exe', 'cooltool-modified.exe', 'branding.res', '1,1,1088');
```

## API

### reshacker.pathToExecutable

*Optional*
Type: `string`

Changes the path to the ResHack executable used for the command execution.
By default, it will be assumed that ResHack.exe is on the PATH.

### reshacker.addSync(ExeFile, SaveAsFile, ResourceFile, ResourceMask)

This method method calls the corresponding CLI '-add' method of ResHack.exe.
See the Resource Hacker Help/ CLI Documentation for more information (although it is sparse).

#### ExeFile

*Required*  
Type: `string`

The target executable for the operation

#### SaveAsFile

*Required*  
Type: `string`

The target path where the modified executable should be saved.

#### ResourceFile

*Required*  
Type: `string`

The path to the resource file that should be read

#### ResourceMask

*Optional*  
Type: `string`  
Default: `,,,`

The resource mask used for applying the read resource.


### reshacker.addskipSync(ExeFile, SaveAsFile, ResourceFile, ResourceMask)

This method method calls the corresponding CLI '-addskip' method of ResHack.exe.
See the Resource Hacker Help/ CLI Documentation for more information (although it is sparse).

#### ExeFile

*Required*  
Type: `string`

The target executable for the operation

#### SaveAsFile

*Required*  
Type: `string`

The target path where the modified executable should be saved.

#### ResourceFile

*Required*  
Type: `string`

The path to the resource file that should be read

#### ResourceMask

*Optional*  
Type: `string`  
Default: `,,,`

The resource mask used for applying the read resource.

### reshacker.addoverwriteSync(ExeFile, SaveAsFile, ResourceFile, ResourceMask)

This method method calls the corresponding CLI '-addoverwrite' method of ResHack.exe.
See the Resource Hacker Help/ CLI Documentation for more information (although it is sparse).

#### ExeFile

*Required*  
Type: `string`

The target executable for the operation

#### SaveAsFile

*Required*  
Type: `string`

The target path where the modified executable should be saved.

#### ResourceFile

*Required*  
Type: `string`

The path to the resource file that should be read

#### ResourceMask

*Optional*  
Type: `string`  
Default: `,,,`

The resource mask used for applying the read resource.

### reshacker.modifySync(ExeFile, SaveAsFile, ResourceFile, ResourceMask)

This method method calls the corresponding CLI '-modify' method of ResHack.exe.
See the Resource Hacker Help/ CLI Documentation for more information (although it is sparse).

#### ExeFile

*Required*  
Type: `string`

The target executable for the operation

#### SaveAsFile

*Required*  
Type: `string`

The target path where the modified executable should be saved.

#### ResourceFile

*Required*  
Type: `string`

The path to the resource file that should be read

#### ResourceMask

*Optional*  
Type: `string`  
Default: `,,,`

The resource mask used for applying the read resource.

### reshacker.extractSync(ExeFile, ResourceFile, ResourceMask)

This method method calls the corresponding CLI 'add' method of ResHack.exe.
See the Resource Hacker Help/ CLI Documentation for more information (although it is sparse).

#### ExeFile

*Required*  
Type: `string`

The target executable for the operation

#### ResourceFile

*Required*  
Type: `string`

The target path where and in which format the read resources should be written to.

#### ResourceMask

*Optional*  
Type: `string`  
Default: `,,,`

The resource mask used for selecting the resources to be extracted.

### reshacker.deleteSync(ExeFile, SaveAsFile, ResourceMask)

This method method calls the corresponding CLI '-delete' method of ResHack.exe.
See the Resource Hacker Help/ CLI Documentation for more information (although it is sparse).

#### ExeFile

*Required*  
Type: `string`

The target executable for the operation

#### SaveAsFile

*Required*  
Type: `string`

The target path where the modified executable should be saved.

#### ResourceMask

*Optional*  
Type: `string`  
Default: `,,,`

The resource mask used to select the resources that should be deleted.