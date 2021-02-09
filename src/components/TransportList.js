import React, { Fragment, useEffect, useState } from 'react';
import addImage from '../assets/icons/add.svg';
import editImg from '../assets/icons/edit.svg';
import VoditelCreate from './VoditelCreate';
import VoditelTable from './VoditelTable';
import VoditelList from './VoditelList';
import Modal from './Modal';
import { useDispatch } from 'react-redux';
import { transportRemove } from '../redux/actions/transport';
const { ipcRenderer } = window.require("electron");

const TransportList = (props) => {
	const dispatch = useDispatch()
	const [voditelModalShow, setVoditelModalShow] = useState({
		status: false,
		index: 0
	});
	useEffect(() => {
		ipcRenderer.on('transport-deleted', remove2);
		ipcRenderer.send("get-transports",props.anketa_id);
	    ipcRenderer.on("get-transports", list);
	    return ()=>{
	      ipcRenderer.removeListener('get-transports', list);
	    } 
	}, []);
	const list=(event, payload)=>{
	  console.log(payload);
	}
	const remove = (id) => {
		ipcRenderer.send('transport-delete', id)
	}
	const remove2 = (event, deleted_id) => {
		dispatch(transportRemove(deleted_id))
		ipcRenderer.removeListener('transport-deleted', remove2)
	}
	const drop = (ev) => {
		ev.currentTarget.parentNode.parentNode.classList.toggle("open");
	}
	if (props.data.length) {
		return (
			<>
				<Modal show={voditelModalShow.status} setShow={() => setVoditelModalShow({ ...voditelModalShow, status: false })}>
					<VoditelList changedAttribute="VODITEL">
						<VoditelTable transportIndex={voditelModalShow.index} setShow={() => setVoditelModalShow({ ...voditelModalShow, status: false })} />
						<VoditelCreate transportIndex={voditelModalShow.index} setShow={() => setVoditelModalShow({ ...voditelModalShow, status: false })} />
					</VoditelList>
				</Modal>
				<table className="transportTable bordered-table" border="1">
					<thead >
						<tr>
							<th width="3%">

							</th>
							<th>
								Марка и Модель
						  </th>
							<th>
								Регистр. №
						  </th>
							<th>
								Год выпуска
						  </th>
							<th>
								Действия
						  </th>
						</tr>
					</thead>
					<tbody>
						{props.data.map((item, idx) => {
							return (
								<Fragment key={`transportlist${idx}`}>
									<tr className="closed">
										<td>
											<img src={addImage}
												className="cursor-pointer"
												onClick={(e) => drop(e)}
												alt="expand"
											/>
										</td>
										<td>
											{item.TB_MARKA} {item.TB_MODEL}
										</td>
										<td>
											{item.TB_REGNUMBER}
										</td>
										<td>
											{item.TB_YEAR}
										</td>
										<td>
											<button onClick={() => remove(item.id)}>
												Удалить
											</button>
										</td>
									</tr>
									<tr>
										<td colSpan="4">
											<div className="thedrop">
												<div className="row">
													<div className="col-md-4 attrs">
														<span>Цвет:</span>
														<span>
															{item.TB_COLOR}
														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>№ кузова (шасси):</span>
														<span>
															{item.TB_KUZOV}

														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>№ двигателя:</span>
														<span>

															{item.TB_DVIGATEL}

														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>№ тех. паспорта:</span>
														<span>
															{item.TB_TEXPSERY} {item.TEXPNUMBER}
														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>Стоимость ТС:</span>
														<span>
															{item.TB_STOIMOST}
														</span>
													</div>
													<div className="col-md-4 attrs">
														<span>Противоугонная сигнализация:</span>
														<span>
															<input type="checkbox" disabled defaultChecked={item.TB_SIGNAL} />
														</span>
													</div>
												</div>
												<div className="row">
													<div className="col-md-12 attrs">
														<div className="v-center">
															Водители № доверенности, прав (категория):
											  <button onClick={() => setVoditelModalShow({ ...voditelModalShow, status: true, index: idx })} className="bg-skyblue p-0">
																<img src={addImage}
																	className="cursor-pointer"
																	alt="expand"
																/>
															</button>
														</div>
														<ul>
															<li>
																{item.voditels.map((item, indx) => (<button key={`t${idx}${indx}`}>
																	{item.TB_NAME}
																</button>))}
															</li>
														</ul>
													</div>
													<div className="col-md-12 attrs">
														<div>
															Примечания (наличие повреждений):
										  </div>
														<div>
															{item.TB_COMMENT}
														</div>
													</div>
												</div>
												<div className="editBtnCnt">
													<button>
														<img src={editImg} alt="edit" className="cursor-pointer" />
													</button>
												</div>
											</div>
										</td>
									</tr>
								</Fragment>)
						})}
					</tbody>
				</table>
			</>
		)
	} else {
		return <p>Нет выбранных объектов</p>
	}

}

export default TransportList;