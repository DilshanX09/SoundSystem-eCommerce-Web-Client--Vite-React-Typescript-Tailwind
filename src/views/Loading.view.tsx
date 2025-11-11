const LoadingView = () => {
     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
               <div className="flex flex-col items-center gap-4">
                    <div className="loader" />
               </div>
          </div>
     )
}
export default LoadingView;
