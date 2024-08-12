const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;

const authenticator = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/upload');

        //if not aunthenticated
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        //if authenticated, send token and signature to upload images
        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const Upload = () => {
  return (
    <div className="Upload">
        <IKContent 
            urlEndpoint={urlEndpoint}
            publicKey={publicKey}
            authenticator={authenticator}
        >
            {/* upload component */}
            <IKUpload
                fileName = "test-upload.png"
                onError={onError}
                onSuccess={onSuccess}>

            </IKUpload>

        </IKContent>
    </div>
  )
}

export default Upload