const Main = () => {
    return (
        <main>
            <Routes> 
                <Route path="/" element={<div>boas</div>}></Route>
                <Route path="/booking" element={<div>booking</div>}></Route>
            </Routes>
        </main>
    )
}

export default Main;