import * as tf from '@tensorflow/tfjs';

const MODEL_URL = 'https://drive.google.com/open?id=1MkMG4L3cNMsevcgV6o72HSdzVn3zoH_u'
const WEIGHT_URL = 'https://drive.google.com/open?id=1eX1JpNx5Ga3S2pJK-zTJgHfGG6EXmHKd'

export calss GAN_Model
{
	constructor(){}

	async load()
	{
		this.model = await tf.laodFrozenModel(
			MODEL_URL, WEIGHT_URL);
	}

	dispose()
	{
		if(this.model)
		{
			this.model.dispose();
		}
	}
	generate(input)
	{
		document.write(input);
	}
}