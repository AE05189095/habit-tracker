const express = require('express');
const router = express.Router();
const Habit = require('../models/Habit');  // Importar el modelo Habit

// Ruta para obtener la lista de hábitos
router.get('/', async (req, res) => {
    try {
        const habits = await Habit.find();  // Obtener todos los hábitos
        res.json(habits);  // Enviar la lista de hábitos como respuesta
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los hábitos', error: err });
    }
});

// Ruta para crear un nuevo hábito (Alta)
router.post('/', async (req, res) => {
    const { title, description } = req.body;

    // Validar los datos de entrada
    if (!title || !description) {
        return res.status(400).json({ message: 'Título y descripción son requeridos' });
    }

    const habit = new Habit({
        title,
        description,
    });

    try {
        await habit.save();  // Guardar el hábito en la base de datos
        res.status(201).json(habit);  // Enviar el hábito creado como respuesta
    } catch (err) {
        res.status(400).json({ message: 'Error al crear el hábito', error: err });
    }
});

// Ruta para eliminar un hábito (Baja)
router.delete('/:id', async (req, res) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);  // Eliminar el hábito por su ID
        if (!habit) {
            return res.status(404).json({ message: 'Hábito no encontrado' });  // Si no se encuentra el hábito
        }
        res.json({ message: 'Hábito eliminado' });  // Confirmación de eliminación
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar el hábito', error: err });
    }
});

// Ruta para actualizar un hábito (Cambio)
router.put('/:id', async (req, res) => {
    const { title, description } = req.body;

    // Validar los datos de entrada
    if (!title || !description) {
        return res.status(400).json({ message: 'Título y descripción son requeridos' });
    }

    try {
        const habit = await Habit.findByIdAndUpdate(
            req.params.id,  // ID del hábito a actualizar
            {
                title,
                description,
            },
            { new: true }  // Devuelve el hábito actualizado
        );

        if (!habit) {
            return res.status(404).json({ message: 'Hábito no encontrado' });  // Si no se encuentra el hábito
        }

        res.json(habit);  // Responder con el hábito actualizado
    } catch (err) {
        res.status(400).json({ message: 'Error al actualizar el hábito', error: err });
    }
});

module.exports = router;
