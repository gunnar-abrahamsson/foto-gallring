import React, { FC, useRef, useState } from 'react'
import { Alert, Button, Form, InputGroup } from 'react-bootstrap';
import useCreateAlbum from '../../hooks/useCreateAlbum';

type props = {
    className?: string;
}
const CreateAlbumWithImages: FC<props> = ({className}) => {
    const { error, createNewAlbum} = useCreateAlbum();

    const albumImputRef = useRef<HTMLInputElement>();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createNewAlbum(albumImputRef.current.value);
    }

    return (
        <div className={className}>
            <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)} >
                <Form.Label htmlFor="album-name">Create new album with selected images</Form.Label>
                <InputGroup className="mb-3">
                    <Form.Control ref={albumImputRef} id="album-name" type="text" placeholder="Enter Album name" />
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-secondary">+</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
            {error && <Alert variant={'warning'}>{error}</Alert>}              
        </div>
    )
}

export default CreateAlbumWithImages;
