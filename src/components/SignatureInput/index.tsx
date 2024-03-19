import SignatureCanvas from "react-signature-canvas";
import { useCallback, useRef, useState } from "react";

const SignatureInput = () => {
  const padRef = useRef<any>(null);
  const [canvas, setCanvas] = useState<string | undefined>(undefined);
  const [canvasVisibility, setCanvasVisibility] = useState(false);

  const clearSignatureCanvas = useCallback(() => {
    padRef?.current?.clear();
    setCanvas(undefined);
    setCanvasVisibility(false);
  }, []);

  const handleGetCanvas = useCallback(() => {
    const canvas = padRef?.current?.toDataURL();

    setCanvas(canvas);
    setCanvasVisibility(true);
  }, []);
  return (
    <div>
      <div style={{ backgroundColor: "white", width: 500, height: 200 }}>
        <SignatureCanvas
          ref={padRef}
          canvasProps={{ width: 500, height: 200 }}
        />
      </div>
      {canvasVisibility && <img src={canvas} alt="signature" />}
      <button onClick={clearSignatureCanvas}>clear</button>
      <button onClick={handleGetCanvas}>save</button>
    </div>
  );
};

export default SignatureInput;
