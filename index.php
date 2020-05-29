<html lang="pt-br">
	<head>
		<title>Grupo JRB - Intranet</title>
		<meta charset="utf-8">
		<meta name="viewport" content="height=device-height, initial-scale=1">
		<link rel="stylesheet" href="css/snake.css">
		<script src="js/jquery.min.js"></script>
		<script src="js/snake.js"></script>
		<?php
			$TAMANHO = 30;
			echo "<script>
			const TAMANHO = $TAMANHO;
			</script>";
		?>
	</head>
	<body>
		<div id="placar" class="placar"></div>
		<div class="game">
			<?php
				$square = 0;
				for ($y = 0; $y < $TAMANHO; $y++){
					echo '<div class=y>';
					for($x = 0; $x < $TAMANHO; $x++){
						echo "<div class=\"x\" id=\"$square\">";
						echo '</div>';
						$square++;
					}
					echo '</div>';
				}
			?>
		</div>
		<div class="controles">
			<button onclick="reset();start()">Start</button>
		</div>
	</body>
</html>