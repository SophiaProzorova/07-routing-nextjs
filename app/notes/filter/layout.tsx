type Props = {
    children: React.ReactNode
};

const Layout = (props: Props) => {
    return(
        <section>
            <div>{props.children}</div>
        </section>
    )
};

export default Layout;