/* CREATE NEW IMAGE */
function newImage(imagePath,leftPix,bottomPix)
{
    let newImage = document.createElement('img');
    newImage.src = imagePath;
    newImage.style.position = 'fixed';
    newImage.style.left = leftPix;
    newImage.style.bottom = bottomPix;
    document.body.append(newImage);
    newImage.addEventListener('dblclick',function(){newImage.remove();})
    return newImage;
}

/* GREEN CHARACTER */
let greenCharacterPath = './assets/green-character.gif';
let greenCharacter = newImage(greenCharacterPath,'100px','100px');

/* PINE TREE */
let pineTreePath = './assets/pine-tree.png';
let pineTree = newImage(pineTreePath,'450px','200px');

/* TREE */
let treePath = './assets/tree.png';
let tree = newImage(treePath,'200px','300px');

/* PILLAR */
let pillarPath = './assets/pillar.png';
let pillar = newImage(pillarPath,'350px','100px');

/* CRATE */
let cratePath = './assets/crate.png';
let crate = newImage(cratePath,'150px','200px');

/* WELL */
let wellPath = './assets/well.png';
let well = newImage(wellPath,'500px','425px');

/* SWORD */
let swordPath = './assets/sword.png';
let sword = newImage(swordPath,'500px','405px');

/* SHEILD */
let sheildPath = './assets/sheild.png';
let sheild = newImage(sheildPath,'165px','185px');

/* STAFF */
let staffPath = './assets/staff.png';
let staff = newImage(staffPath,'600px','100px');