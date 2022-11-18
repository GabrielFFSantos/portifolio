import { ModalSection } from "./modal.style";
import { useForm } from "react-hook-form";

const ModalForms = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			Login: "",
			Senha: "",
			Nome: "",
			Sobrenome: "",
			Email: "",
			Telefone: "",
			Confirma: "",
		},
	});
	const onSubmit = (data: any) => console.log(data);
	console.log(errors);

	return (
		<ModalSection>
			<div>
				<label>NOME:</label>
				<input
					type="text"
					{...register("Nome", { required: "Campo Obrigatorio" })}
					placeholder="Luiz"
				/>
			</div>
			<div>
				<label>EMAIL:</label>
				<input
					type="text"
					{...register("Email", { required: "Campo Obrigatorio" })}
					placeholder="exemplo@exemplo.com"
				/>
			</div>
			<div>
				<label>SOBRENOME:</label>
				<input
					type="text"
					{...register("Sobrenome", { required: "Campo Obrigatorio" })}
					placeholder="Miranda"
				/>
			</div>
			<div>
				<label>SENHA:</label>
				<input
					type="password"
					{...register("Senha", { required: "Campo Obrigatorio" })}
					placeholder="******"
				/>
			</div>
			<div>
				<label>TELEFONE:</label>
				<input
					type="tel"
					{...register("Telefone", { required: "Campo Obrigatorio" })}
					placeholder="(00) 9 0000-0000"
				/>
			</div>
			<div>
				<label>CONFIRMAR SENHA:</label>
				<input
					type="password"
					{...register("Confirma", { required: "Campo Obrigatorio" })}
					placeholder="******"
				/>
			</div>
		</ModalSection>
	);
};

export default ModalForms;
