import styled from "styled-components";

export const StyledUserPage = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        background-color: var(--color-green-1);
        padding: 0.5rem 2rem;
        color: var(--color-green-2);
        border-radius: 5px;
    }
    
    .div-green{
        background-color: var(--color-green-1);
        width: 100%;
        height: 120px;
    }

    .div-img{
        width: 110px;
        height: 110px;
        border: 4px solid white;
        border-radius:100%;
        position: fixed;
        top:120px;
    }

   .div-user{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3rem;
    }

   .div-user-info{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }

    ul{
        margin-top: 5rem;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
    }

    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }

    .div-circle{
        width: 50px;
        height: 50px;
        display: flex;
        border-radius: 100%;
        align-items: center;
        justify-content: center;
        background-color: var(--color-green-1);
        color: white;
    }

`