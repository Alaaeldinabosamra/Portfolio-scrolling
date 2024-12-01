import { Text,Html,ContactShadows,PresentationControls,Environment,useGLTF, OrbitControls, Float } from '@react-three/drei'
import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';

export default function Experience()
{
    // const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    const computer = useGLTF('./macbook.gltf')
    const mobile = useGLTF('./mobile.gltf')
    

    // State to store if the device is mobile
    const [isMobile, setIsMobile] = useState(false);

    const [showPopup, setShowPopup] = useState(true); // State to control the popup visibility


    // Get the camera object from react-three
    const { camera } = useThree();

    useEffect(() => {
        // Detect if the user is on a mobile device based on screen width
        const checkIfMobile = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);  // Mobile screen detected
            } else {
                setIsMobile(false); // Desktop or larger screen detected
            }
        };

        // Check screen size on initial render
        checkIfMobile();

        // Re-check the screen size on window resize
        window.addEventListener("resize", checkIfMobile);

        // Cleanup event listener when the component unmounts
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    useEffect(() => {
        // If on mobile, adjust the camera position by moving it further away from the object
        if (isMobile) {
            camera.position.z = 5;  // Move camera 10 units away from the object
            camera.lookAt(0, 0, 0);  // Move camera 2 units to right
        } else {
            camera.position.z = 5;  // Default position for desktop
        }
    }, [isMobile, camera]); // Re-run when mobile state or camera changes


    // Function to handle closing the popup
    const handlePopupClose = () => {
        setShowPopup(false);
    };


    return <>
        <Html>

        {showPopup && isMobile && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Open in PC for better version and performance</p>
                        <button onClick={handlePopupClose}>OK</button>
                    </div>
                </div>
            )}
        </Html>

        <Environment preset='city' />
        <color args={ ['#695b5b'] } attach="background" />
        
        {/* <OrbitControls makeDefault  enableZoom={false} enablePan={false} /> */}
        
        {isMobile ?(<PresentationControls global rotation={[0.13, 0.1, 0]} polar={[-0.4, 0.2]} azimuth={[-1, 0.75]} >
                    <Float rotationIntensity={0.4}>
                        <rectAreaLight width={2.5} height={1.65} intensity={65} color={'ivory'} rotation={[0.1, Math.PI, 0]} position={[0, 0.55, -1.15]} />
                        <primitive object={mobile.scene} position-y={ -0.9 } rotation-x={-0.3} >
                            <Html transform wrapperClass='htmlScreen' distanceFactor={1.59} position={[0.169,1.33,0.08]} rotat>
                                <iframe src="https://personal-portfolio-xi-five-12.vercel.app/" />
                            </Html>
                        </primitive>
                        <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize= { 0.5 }
                    position= { [0, -1.5, 0.75] }
                    rotation-x = { -1.25 }
                    maxWidth={2}
                    textAlign= "center"
                >Alaaeldin Abousamra</Text>
                    </Float>
                </PresentationControls>):
        (<PresentationControls global rotation={[0.13, 0.1,0]}
            polar={[ -0.4, 0.2]} //polar min max values of vertical rotation limit
            azimuth={[ -1, 0.75]} // azimuth min max values for horizontal one
            config={ {mass: 2, tension: 400} }
            snap= {{ mass: 4, tension: 400 }} // back to intial postition
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight 
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'ivory'}
                    rotation={[0.1, Math.PI,0]}
                    position={[0,0.55, -1.15]}
                />
                <primitive object={computer.scene} position-y={ -1.2 }>
                    <Html 
                        transform 
                        wrapperClass='htmlScreen'
                        distanceFactor={1.17}
                        position={[0,1.56,-1.4]}
                        rotation-x={-0.256}
                     >
                        <iframe src="https://personal-portfolio-xi-five-12.vercel.app/"  />
                    </Html>
                </primitive>
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize= { 1 }
                    position= { [2.5, 0.75, 0.75] }
                    rotation-y = { -1.25 }
                    maxWidth={2}
                    textAlign= "center"
                >Alaaeldin Abousamra</Text>
            </Float>
        </PresentationControls>
) }

        <ContactShadows position-y={ -1.4 } opacity={0.4} scale ={5} blur={2.4} />

    </>
}
/**
 * https://market.pmnd.rs
 * 
 */