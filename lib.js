var
    child_process = require('child_process')
    ,path = require('path')
    ,util = require('util')
    ;


/**
 * @param {string} pathToExecutable
 * @param {string[]} args
 * @returns {Buffer}
 */
function execCommandSync(pathToExecutable, args)
{
    return child_process.execSync(pathToExecutable + " " + args.join(" "));
}

function ResHackInstance(config)
{
    config = util._extend({}, config);
    if(config.pathToExecutable)
        this.pathToExecutable = config.pathToExecutable;
}

/**
 * Path to ResHack.exe (including the executable name)
 * If left untouched, it will be assumed ResHack.exe is on the PATH
 * @type {string}
 */
ResHackInstance.prototype.pathToExecutable = "ResHacker.exe";

/**
 * @param {string[]} args
 * @returns {Buffer}
 */
ResHackInstance.prototype.execSync = function(args)
{
    return execCommandSync(this.pathToExecutable, args);
};


/**
 * @param {string} ExeFile - the source exe file
 * @param {string} SaveAsFile - the output modified exe file
 * @param {string} ResourceFile - the input resource file
 * @param {string} ResourceMask - the path/mask selecting the resources to add
 * @returns {Buffer}
 */
ResHackInstance.prototype.addSync = function(ExeFile, SaveAsFile, ResourceFile, ResourceMask){

    if(!ResourceMask)
    {
        ResourceMask = ",,,"
    }

    return this.execSync([
        '-add',
        '\"'+ExeFile+'\",',
        '\"'+SaveAsFile+'\",',
        '\"'+ResourceFile+'\",',
        ''+ResourceMask+''
    ]);
};

/**
 * @param {string} ExeFile - the source exe file
 * @param {string} SaveAsFile - the output modified exe file
 * @param {string} ResourceFile - the input resource file
 * @param {string} ResourceMask - the path/mask selecting the resources to add (or skip when existent)
 * @returns {Buffer}
 */
ResHackInstance.prototype.addskipSync = function(ExeFile, SaveAsFile, ResourceFile, ResourceMask){

    if(!ResourceMask)
    {
        ResourceMask = ",,,"
    }

    return this.execSync([
        '-addskip',
        '\"'+ExeFile+'\",',
        '\"'+SaveAsFile+'\",',
        '\"'+ResourceFile+'\",',
        ''+ResourceMask+''
    ]);
};

/**
 * @param {string} ExeFile - the source exe file
 * @param {string} SaveAsFile - the output modified exe file
 * @param {string} ResourceFile - the input resource file
 * @param {string} ResourceMask - the path/mask selecting the resources to add (or overwrite when existent)
 * @returns {Buffer}
 */
ResHackInstance.prototype.addoverwriteSync = function(ExeFile, SaveAsFile, ResourceFile, ResourceMask){

    if(!ResourceMask)
    {
        ResourceMask = ",,,"
    }

    return this.execSync([
        '-addoverwrite',
        '\"'+ExeFile+'\",',
        '\"'+SaveAsFile+'\",',
        '\"'+ResourceFile+'\",',
        ''+ResourceMask+''
    ]);
};

/**
 * @param {string} ExeFile - the source exe file
 * @param {string} SaveAsFile - the output modified exe file
 * @param {string} ResourceFile - the input resource file
 * @param {string} ResourceMask - the path/mask selecting the resources to modify
 * @returns {Buffer}
 */
ResHackInstance.prototype.modifySync = function(ExeFile, SaveAsFile, ResourceFile, ResourceMask){

    if(!ResourceMask)
    {
        ResourceMask = ",,,"
    }

    return this.execSync([
        '-modify',
        '\"'+ExeFile+'\",',
        '\"'+SaveAsFile+'\",',
        '\"'+ResourceFile+'\",',
        ''+ResourceMask+''
    ]);
};

/**
 * @param {string} ExeFile - the source exe file
 * @param {string} ResourceFile - the output resource file
 * @param {string} ResourceMask - the path/mask selecting the resource to extract
 * @returns {Buffer}
 */
ResHackInstance.prototype.extractSync = function(ExeFile, ResourceFile, ResourceMask){

    if(!ResourceMask)
    {
        ResourceMask = ",,,"
    }

    return this.execSync([
        '-extract',
        '\"'+ExeFile+'\",',
        '\"'+ResourceFile+'\",',
        ''+ResourceMask+''
    ]);
};

/**
 * @param {string} ExeFile - the source exe file
 * @param {string} SaveAsFile - the output modified exe file
 * @param {string} ResourceMask - the path/mask selecting the resources to delete
 * @returns {Buffer}
 */
ResHackInstance.prototype.deleteSync = function(ExeFile, SaveAsFile, ResourceMask){

    if(!ResourceMask)
    {
        ResourceMask = ",,,"
    }

    return this.execSync([
        '-delete',
        '\"'+ExeFile+'\",',
        '\"'+SaveAsFile+'\",',
        ''+ResourceMask+''
    ]);
};

/**
 * Creates a fresh instance with custom configuration
 * @param config
 * @returns {ResHackInstance}
 */
ResHackInstance.configureInstance = function(config)
{
    return new ResHackInstance(config);
};

module.exports = new ResHackInstance();