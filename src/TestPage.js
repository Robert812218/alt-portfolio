import './TestPage.css';



function CardGlow() {
	return (
		<div className="cardglow-wrapper">
			<div className="cardglow-container">

				<div className="card">
					<div className="face face1">FACE FACE1
						<div className="content">
							<i>ICON</i>
							<h3>TEST</h3>
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>text text sample text etc etc and so on</p>
							<a href="#" type="button">Link</a>
						</div>
					</div>
				</div>

				<div className="card">
					<div className="face face1">FACE FACE1
						<div className="content">
							<i>ICON</i>
							<h3>TEST</h3>
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>text text sample text etc etc and so on</p>
							<a href="#" type="button">Link</a>
						</div>
					</div>
				</div>


				<div className="card">
					<div className="face face1">FACE FACE1
						<div className="content">
							<i>ICON</i>
							<h3>TEST</h3>
						</div>
					</div>
					<div className="face face2">
						<div className="content">
							<p>text text sample text etc etc and so on</p>
							<a href="#" type="button">Link</a>
						</div>
					</div>
				</div>

			
			</div>
		</div>
	);
}

export default function TestPage() {
	

	return (
		<div>
			<CardGlow />
		</div>
	);
}
