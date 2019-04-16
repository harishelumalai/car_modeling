import { APPSTATE } from './appstate.enum';
//import { AppContext } from './appcontext.interface';
//import { CurrentGlobal } from './app.component';



export var scene;
export var camera;
export var renderer;
export var mymodel;
export var materials;
export var light;

var CurrentGlobal = {
    "current_appstate": APPSTATE.IDLE_STATE,
    "current_appconfig": [
      {"name":"body_color", "value": "red"}
      //{"name":"head_light_type","value":"type2"}
    ]
  };

export function myinit()
{
    let mycontainer = document.getElementById('three-container');
    console.log("my container");
    console.log(mycontainer);
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, mycontainer.clientWidth/mycontainer.clientHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();

    
    //Change the below lines
    //renderer.setSize( mycontainer.innerWidth, mycontainer.innerHeight );
    //renderer.setSize( 700, 600 );
    renderer.setSize( mycontainer.scrollWidth, mycontainer.scrollHeight );
    mycontainer.appendChild( renderer.domElement );
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var geometry1 = new THREE.BoxGeometry( 7, 7, 0.1 );
    materials = [
        new THREE.MeshBasicMaterial( { color: 0xff0000 } ),
        new THREE.MeshBasicMaterial( { color: 0x00ff00 } ),
        new THREE.MeshBasicMaterial( { color: 0x0000ff } )
    ];

    mymodel = new THREE.Mesh( geometry, materials[0]);
    console.log(mymodel.material);
    scene.add( mymodel );

    let mymodel1 = new THREE.Mesh( geometry1, new THREE.MeshBasicMaterial( { color: 0xdddddd } ));
    mymodel1.position.z = -3;
    console.log(mymodel1.material);
    scene.add( mymodel1 );

    light = new THREE.PointLight( 0xffffff, 50, 1000 );
    light.position.set( 1,1,1 );
    scene.add( light );

    //camera.position.y = 5;
    camera.position.z = 5;
    //camera.lookAt(mymodel);
};

export function myanimate()
{
    requestAnimationFrame( myanimate );
    //console.log('animate');

    //Update material
    if(CurrentGlobal.current_appconfig[0].value == "RED")
        mymodel.material = materials[0];
    else if(CurrentGlobal.current_appconfig[0].value == "BLUE")
        mymodel.material = materials[2];
    else if(CurrentGlobal.current_appconfig[0].value == "GREEN")
        mymodel.material = materials[1];

    //console.log(CurrentGlobal.current_appconfig[0].value);
    
    if(CurrentGlobal.current_appstate == APPSTATE.IDLE_STATE)
    {
        camera.position.z = 5;
        //camera.lookAt(scene);
        mymodel.rotation.x += 0.01;
        mymodel.rotation.y += 0.01;
    }
    else if(CurrentGlobal.current_appstate == APPSTATE.BODY_CONFIG_STATE)
    {
        camera.position.z += .01;
        camera.lookAt(scene);
        /*for(let x in this.CurrentGlobal.current_appconfig)
        {
            if(CurrentGlobal.current_appconfig[x].name == "body_color")
            {
                if(CurrentGlobal.current_appconfig[x].value == "RED")
                    mymodel.material = materials[0];
                else if(CurrentGlobal.current_appconfig[x].value == "BLUE")
                    mymodel.material = materials[0];
                else if(CurrentGlobal.current_appconfig[x].value == "GREEN")
                    mymodel.material = materials[0];
            }
        }*/
        //Want to fetch some other value? Do it here.
    }
    else if(CurrentGlobal.current_appstate == APPSTATE.HEAD_LIGHT_CONFIG_STATE)
    {

    }
    renderer.render( scene, camera );
};

/*
exports scene = scene;
exports camera = camera;
exports renderer = renderer;
exports mymodel = mymodel;
exports materials = materials;

exports myinit = myinit;
exports myanimate = myanimate;
*/