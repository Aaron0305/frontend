import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Button,
    Box
} from '@mui/material';

const AdminAssignmentsTest = ({ open, onClose }) => {
    console.log('AdminAssignmentsTest renderizado - open:', open);
    
    if (!open) {
        return null;
    }
    
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
        >
            <DialogTitle>
                Test - Gestión de Asignaciones
            </DialogTitle>
            <DialogContent>
                <Box p={3}>
                    <Typography variant="h6" gutterBottom>
                        Componente de prueba funcionando correctamente
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        Si ves este mensaje, el problema está en el componente AdminAssignments original.
                    </Typography>
                    <Button 
                        variant="contained" 
                        onClick={onClose}
                        sx={{ mt: 2 }}
                    >
                        Cerrar
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default AdminAssignmentsTest;
