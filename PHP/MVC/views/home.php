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
                <tr scope="row">
                    <td>1</td>
                    <td>Juan</td>
                    <td>20</td>
                    <td>8.5</td>
                    <td>Matemáticas</td>
                </tr>
            </tbody>
        </table>
    </main>
</body>
</html>