<?php
    print_r($estudiantes);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica MVC</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>
<body class="bg-light">
    <?php include './views/layouts/navbar.php'?>

    <main class="container mt-2">
        <a href="./index.php?action=create" class="btn btn-success">Agregar Estudiante</a>
        <table class="table m-2">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Edad</th>
                    <th scope="col">Promedio</th>
                    <th scope="col">Curso</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach($estudiantes as $estudiante) { ?>
                <tr scope="row">
                    <td><?php echo $estudiante['id']; ?></td>
                    <td><?php echo $estudiante['nombre']; ?></td>
                    <td><?php echo $estudiante['edad']; ?></td>
                    <td><?php echo $estudiante['promedio']; ?></td>
                    <td><?php echo $estudiante['id_curso']; ?></td>
                </tr>
                <?php } ?>
            </tbody>
        </table>
    </main>
</body>
</html>