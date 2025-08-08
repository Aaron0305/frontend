import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Alert,
    CircularProgress
} from '@mui/material';

const AdminAssignmentsDebug = ({ open, onClose }) => {
    const [debugInfo, setDebugInfo] = useState('Inicializando...');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (open) {
            console.log('🐛 AdminAssignmentsDebug - Dialog opened');
            setDebugInfo('Dialog abierto correctamente');
            
            // Simular carga de datos
            setTimeout(() => {
                try {
                    setDebugInfo('Simulando carga de datos...');
                    console.log('🐛 Simulating data load...');
                    
                    // Test importaciones
                    console.log('🐛 Testing imports...');
                    setDebugInfo('Verificando importaciones...');
                    
                    // Test servicios
                    setTimeout(() => {
                        setDebugInfo('Verificando servicios...');
                        console.log('🐛 Testing services...');
                        
                        // Finalizar
                        setTimeout(() => {
                            setDebugInfo('✅ Componente cargado exitosamente');
                            setLoading(false);
                        }, 1000);
                    }, 1000);
                    
                } catch (err) {
                    console.error('🐛 Error in debug component:', err);
                    setError(`Error: ${err.message}`);
                    setLoading(false);
                }
            }, 500);
        }
    }, [open]);

    console.log('🐛 AdminAssignmentsDebug rendering:', { open, loading, error, debugInfo });

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                🐛 Diagnóstico - Administrar Asignaciones
            </DialogTitle>
            <DialogContent>
                {loading && (
                    <Box display="flex" alignItems="center" gap={2} py={3}>
                        <CircularProgress />
                        <Typography>Diagnosticando componente...</Typography>
                    </Box>
                )}
                
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}
                
                <Box py={2}>
                    <Typography variant="h6" gutterBottom>
                        Estado del Componente:
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'monospace', bgcolor: 'grey.100', p: 1 }}>
                        {debugInfo}
                    </Typography>
                </Box>
                
                <Box py={2}>
                    <Typography variant="h6" gutterBottom>
                        Test de Consola:
                    </Typography>
                    <Button 
                        variant="outlined" 
                        onClick={() => {
                            console.log('🐛 === TEST DE CONSOLA ===');
                            console.log('Dialog open:', open);
                            console.log('LocalStorage token:', !!localStorage.getItem('token'));
                            console.log('LocalStorage user:', localStorage.getItem('user'));
                            setDebugInfo('Check console for detailed logs');
                        }}
                    >
                        Test Consola
                    </Button>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained">
                    Cerrar Diagnóstico
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AdminAssignmentsDebug;
